
//查看===================
git status //查看状态
git add . //本地仓库添加 全部文件
git commit -m '备注信息' //commit是提交,-m是备注信息

git branch login //创建分支,分支名是login
git checkout login //切换到login分支
git checkout master //切换到主线
git rm --cached 文件名 //删除本地已经上添加的文件
git merge 分支名 //合并分支到主线(需要在主线下输入命令)


git remote //查看有没有对应的地址
git remote add origin https://github.com/ONEPIECE-0815/Home-Work.git //添加GitHub仓库地址


git push -u origin master //
git clone 仓库地址:https://github.com/ONEPIECE-0815/Home-Work.git  //先在目标文件夹地址cmd,把GitHub代码复制到本地
git clone -b 分支名 地址:https://github.com/ONEPIECE-0815/Home-Work.git  //先在目标文件夹地址cmd,把GitHub代码复制到本地


https://github.com/ONEPIECE-0815/Home-Work.git

> git branch -a // # 1.查看所有分支

> git branch  //# 2.查看当前使用分支(结果列表中前面标*号的表示当前使用分支)

> git checkout 分支名  // 3.切换分支

// 1、在本地仓库没有此分支，但远程仓库存在，想将远程仓库拉至本地仓库，使用命令 （git checkout -b   新分支名   origin/分支名）

// 2、在远程没有分支，想上传分支，使用命令（git checkout -b  新分支名）， 在本地建好分支后  使用命令 git push origin  分支名（或git push origin  分支名 :分支名） 上传。

// 3、git 删除远程仓库分支 ：  git push origin  :[分支名] 

//      或  git push origin --delete [分支名]