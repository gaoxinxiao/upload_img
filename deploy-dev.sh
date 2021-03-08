#deploy-dev.sh
echo Deploy Project

# 获取最新代码
git pull

# 更新包文件
yarn install

# 打包项目
yarn build