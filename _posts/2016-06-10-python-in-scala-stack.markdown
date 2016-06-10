---
layout: post
title: "Integrating Python into Scala Stack"
tags: [sample post, readability, test]
comments: true
image: "{{ site.url }}/assets/images/python.png"
---

This post will walk you through integrating python machine-learning libraries into your existing scala stack. 

Before we proceed further, let us answer the basic question:


> Why not use scala native libraries?

* Primarily, there are a very limited set of options available in Scala, spark mllib, deeplearning4j.

* The python ML ecosystem is huge, scikit-learn itself is enough for most usecases. With the recent surge of deep-learning, most of the established and stable libraries such as Keras/Tensorflow/Theano are available in python.



Our goal is to get the best of both worlds: Scala's strictly typed system and Python's plethora of libraries at our disposal


<h1 class="title"> from python import x </h1>
While trying to approach this problem, we investigated various libraries. Here is basic case study regarding each one of them: 

* [Jython](http://www.jython.org/): Jython is basically a re-implementation of python in Java. Although it does include most of the python modules, it lacks the support for C-Extension modules. Which essentially renders Jython useless for most of the libraries in the ML ecosystem as all of them use C-Extension to speedup the processing.

* [JyNI](http://jyni.org/): (Jython Native Interface) JyNI is a compatibility layer with the goal to enable Jython to use native CPython extensions like NumPy or SciPy. However, JyNI doesn't currently support the entire Python C-API, so it is not currently at a state where we can use it for libraries built using Cython.

* [Jep](https://github.com/mrj0/jep): (Java Embeded Python) Jep takes a different route and embeds CPython in Java using JNI. Long story short, if you need to include CPython modules (such as numpy) Jep is the way to go.


<h1 class="title"> How Jep Works? </h1>
Jep uses JNI and the CPython API to start up the Python interpreter inside the JVM. When you create a Jep instance in Java, a sub-interpreter will be created for that Jep instance and will remain in memory until the Jep instance is closed with `jep.close()`. Have a look at Jep's [documentation](https://github.com/mrj0/jep/wiki/How-Jep-Works) for further details.

Let us demonstrate via a simple example:

{% highlight python %}
# Define this in file `add.py`
def add(a, b):
	return a + b
{% endhighlight %}

{% highlight scala %}
object JepAddExample extends App {
	val jep = new Jep()
	jep.runScript("add.py")
	val a = 2
	val b = 3
	// There are multiple ways to evaluate. Let us demonstrate them:
	jep.eval(s"c = add($a, $b)")
	val ans = jep.getValue("c").asInstanceOf[Int]
	println(ans)
	val ans2 = jep.invoke("add", a, b).asInstanceOf[Int]
	println(ans2)

}
{% endhighlight %}

<h1 class="title"> import keras {via scala} </h1>
It's about time we experience the magic of keras from scala land. This example can be found on [github.com/sushant-hiray/scala-python-example](https://github.com/sushant-hiray/scala-python-example)

We will demonstrate how to train a simple covnet on the MNIST dataset via scala. This is a [sample example from keras](https://github.com/fchollet/keras/blob/master/examples/mnist_cnn.py)

{% highlight python %}
'''File: mnist_cnn.py
Trains a simple convnet on the MNIST dataset.

Gets to 99.25% test accuracy after 12 epochs
(there is still a lot of margin for parameter tuning).
16 seconds per epoch on a GRID K520 GPU.
'''

from __future__ import print_function
import numpy as np
np.random.seed(1337)  # for reproducibility

from keras.datasets import mnist
from keras.models import Sequential
from keras.layers import Dense, Dropout, Activation, Flatten
from keras.layers import Convolution2D, MaxPooling2D
from keras.utils import np_utils

batch_size = 128
nb_classes = 10
nb_epoch = 12

# input image dimensions
img_rows, img_cols = 28, 28
# number of convolutional filters to use
nb_filters = 32
# size of pooling area for max pooling
nb_pool = 2
# convolution kernel size
nb_conv = 3

# the data, shuffled and split between train and test sets
(X_train, y_train), (X_test, y_test) = mnist.load_data()

X_train = X_train.reshape(X_train.shape[0], 1, img_rows, img_cols)
X_test = X_test.reshape(X_test.shape[0], 1, img_rows, img_cols)
X_train = X_train.astype('float32')
X_test = X_test.astype('float32')
X_train /= 255
X_test /= 255
print('X_train shape:', X_train.shape)
print(X_train.shape[0], 'train samples')
print(X_test.shape[0], 'test samples')

# convert class vectors to binary class matrices
Y_train = np_utils.to_categorical(y_train, nb_classes)
Y_test = np_utils.to_categorical(y_test, nb_classes)

model = Sequential()

model.add(Convolution2D(nb_filters, nb_conv, nb_conv,
                        border_mode='valid',
                        input_shape=(1, img_rows, img_cols)))
model.add(Activation('relu'))
model.add(Convolution2D(nb_filters, nb_conv, nb_conv))
model.add(Activation('relu'))
model.add(MaxPooling2D(pool_size=(nb_pool, nb_pool)))
model.add(Dropout(0.25))

model.add(Flatten())
model.add(Dense(128))
model.add(Activation('relu'))
model.add(Dropout(0.5))
model.add(Dense(nb_classes))
model.add(Activation('softmax'))

model.compile(loss='categorical_crossentropy',
              optimizer='adadelta',
              metrics=['accuracy'])

model.fit(X_train, Y_train, batch_size=batch_size, nb_epoch=nb_epoch,
          verbose=1, validation_data=(X_test, Y_test))
score = model.evaluate(X_test, Y_test, verbose=0)
print('Test score:', score[0])
print('Test accuracy:', score[1])
{% endhighlight %}


{% highlight scala %}
object KerasScala extends App {
	val jep = new Jep()
	jep.runScript("mnist_cnn.py")
	val score = jep.getValue("score[0]").asInstanceOf[Double]
	val accuracy = jep.getValue("score[1]").asInstanceOf[Double]
	println(s"score is $score and accuracy is $accuracy")
}
{% endhighlight %}

With this we've successfully imported `keras` in Scala. The possibilities with this are endless. 

For instance, you can train a model in an offline fashion using python itself and later use Scala (alongwith Spark) to run the model over a very large dataset in a multi-threaded environment.

And also `import anitgravity`

![Python XKCD]({{ site.url }}/assets/images/python.png)
