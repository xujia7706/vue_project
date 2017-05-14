<template>
	<el-row class="container">
		<el-col :span="24" class="header">
			<el-col :span="10" class="logo">
				管理系统
			</el-col>
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner">admin</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided>退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
		<el-col :span="24" class="main">
			<aside>
				<el-menu default-active="2" class="el-menu-vertical-demo" theme="dark" router unique-opened :default-active="$route.path">
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
				      	<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
					</template>
			    </el-menu>
			</aside>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
	</el-row>
</template>
<style scoped>
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
	}
	.header{
		background-color: #62c9de;
		height: 50px;
	}
	.logo{
		line-height: 50px;
		padding-left: 15px;
	}
	.userinfo{
		line-height: 50px;
		float: right;
		text-align: right;
		padding-right: 15px;
	}
	aside{
		width: 230px;
		float: left;
	}
	.content-container{
		float: left;
	}
</style>