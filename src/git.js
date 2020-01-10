
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


Git常用操作命令收集：
1) 远程仓库相关命令
检出仓库：$ git clone git://github.com/jquery/jquery.git
查看远程仓库：$ git remote -v
添加远程仓库：$ git remote add [name] [url]
删除远程仓库：$ git remote rm [name]
修改远程仓库：$ git remote set-url --push[name][newUrl]
拉取远程仓库：$ git pull [remoteName] [localBranchName]
推送远程仓库：$ git push [remoteName] [localBranchName]
 
2）分支(branch)操作相关命令
查看本地分支：$ git branch
查看远程分支：$ git branch -r
创建本地分支：$ git branch [name] ----注意新分支创建后不会自动切换为当前分支
切换分支：$ git checkout [name]

创建新分支并立即切换到新分支：$ git checkout -b [name]

删除分支：$ git branch -d [name] ---- -d选项只能删除已经参与了合并的分支，对于未有合并的分支是无法删除的。如果想强制删除一个分支，可以使用-D选项
合并分支：$ git merge [name] ----将名称为[name]的分支与当前分支合并

创建远程分支(本地分支push到远程)：$ git push origin [name]
删除远程分支：$ git push origin :heads/[name],

我从master分支创建了一个issue5560分支，做了一些修改后，使用git push origin master提交，但是显示的结果却是'Everything up-to-date'，发生问题的原因是git push origin master 在没有track远程分支的本地分支中默认提交的master分支，因为master分支默认指向了origin master 分支，这里要使用git push origin issue5560：master 就可以把issue5560推送到远程的master分支了。

    如果想把本地的某个分支test提交到远程仓库，并作为远程仓库的master分支，或者作为另外一个名叫test的分支，那么可以这么做。

$ git push origin test:master         // 提交本地test分支作为远程的master分支 //好像只写这一句，远程的github就会自动创建一个test分支
$ git push origin test:test              // 提交本地test分支作为远程的test分支

如果想删除远程的分支呢？类似于上面，如果:左边的分支为空，那么将删除:右边的远程的分支。

$ git push origin :test              // 刚提交到远程的test将被删除，但是本地还会保存的，不用担心
3）版本(tag)操作相关命令
查看版本：$ git tag
创建版本：$ git tag [name]
删除版本：$ git tag -d [name]
查看远程版本：$ git tag -r
创建远程版本(本地版本push到远程)：$ git push origin [name]
删除远程版本：$ git push origin :refs/tags/[name]
 
4) 子模块(submodule)相关操作命令
添加子模块：$ git submodule add [url] [path]
如：$ git submodule add git://github.com/soberh/ui-libs.git src/main/webapp/ui-libs
初始化子模块：$ git submodule init ----只在首次检出仓库时运行一次就行
更新子模块：$ git submodule update ----每次更新或切换分支后都需要运行一下
删除子模块：（分4步走哦）
1)$ git rm --cached [path]
2) 编辑“.gitmodules”文件，将子模块的相关配置节点删除掉
3) 编辑“.git/config”文件，将子模块的相关配置节点删除掉
4) 手动删除子模块残留的目录
 
5）忽略一些文件、文件夹不提交
在仓库根目录下创建名称为“.gitignore”的文件，写入不需要的文件夹名或文件，每个元素占一行即可，如
target
bin
*.db
 
 
git操作-删除文件
日期:2012-05-20 来源: bg090721 分享至:
 

git删除文件

rm add2.txt

git rm add2.txt

git commit -m "rm test"

git push web

 

-----------at server

cd /var/www/foo.git;sudo git update-server-info

 

------------检查删除效果

cd;rm foo3 -rf;git clone http://[某ip]/foo.git foo3

 

------------更新已经存在的local code

cd;cd foo2

git remote add web [某user]@[某ip]:/var/www/foo.git/

git pull web master


$ git push origin

上面命令表示，将当前分支推送到origin主机的对应分支。 

如果当前分支只有一个追踪分支，那么主机名都可以省略。 

$ git push 如果当前分支与多个主机存在追踪关系，那么这个时候-u选项会指定一个默认主机，这样后面就可以不加任何参数使用git push。

$ git push -u origin master 上面命令将本地的master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用git push了。

不带任何参数的git push，默认只推送当前分支，这叫做simple方式。此外，还有一种matching方式，会推送所有有对应的远程分支的本地分支。Git 2.0版本之前，默认采用matching方法，现在改为默认采用simple方式。