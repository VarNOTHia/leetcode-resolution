## LEETCODE —— 堆

JS 是没有原生的堆的方法的，所以需要手写。

堆是一种**完全二叉树**，使用顺序结构存储。按照堆内**所有**父节点大 / 小于子节点，分为大 / 小顶堆。

优先队列就是入队列之后按优先级排的队列，因为只能 shift，所以适合用堆。