/**
 * * 这是Keystatic配置文件。它用于定义将在Keystatic内容管理系统（CMS）中使用的集合和字段。
 *
 *! 这与Astro内容集合协同工作。如果更新其中一个，必须同时更新另一个。
 *
 * 可通过 /admin 或 /keystatic 访问Keystatic界面
 * 开发环境下以本地模式运行，生产环境下以云模式运行
 * 云部署注册免费（每个团队最多3个用户）
 * 文档：https://keystatic.com/docs/cloud
 * 在此处创建Keystatic Cloud账户：https://keystatic.cloud/
 */

 import { config } from "@keystatic/core";
 import { collection, fields, singleton } from "@keystatic/core";
 
 export default config({
	 // 开发环境下以本地模式运行，生产环境下以云模式运行
	 storage: import.meta.env.DEV === true? { kind: "local" } : { kind: "cloud" },
	 // 云部署注册免费（每个团队最多3个用户）
	 // 文档：https://keystatic.com/docs/cloud
	 // 在此处创建Keystatic Cloud账户：https://keystatic.cloud/
	 cloud: {
		 project: 'astro-stuzbn/yingdaoye-1',
	 },
	 ui: {
		 brand: { name: "星落引导页设置" },
	 },
	 singletons: {
		 /**
		  * * 个人简介与配置单例
		  * 此配置由Astro内容集合使用，因此如果更新此配置，需要同时更新Astro内容集合的架构
		  */
		 config: singleton({
			 label: "个人简介与配置",
			 path: `src/data/bio/`,
			 format: { contentField: "bio" },
			 schema: {
				 name: fields.text({
					 label: "姓名",
					 validation: {
						 isRequired: true,
					 },
				 }),
				 bio: fields.mdx({
					 label: "个人简介",
					 extension: "md", // 强制使用.md 扩展名，因为我们不需要mdx
					 options: {
						 bold: true,
						 italic: true,
						 strikethrough: true,
						 code: true,
						 heading: false,
						 blockquote: false,
						 orderedList: true,
						 unorderedList: true,
						 table: false,
						 link: true,
						 image: false,
						 divider: false,
						 codeBlock: false,
					 },
				 }),
				 theme: fields.select({
					 label: "主题",
					 options: [
						 { label: "深色", value: "dark" },
						 { label: "浅色", value: "light" },
					 ],
					 defaultValue: "dark",
				 }),
				 blur: fields.select({
					 label: "模糊效果",
					 options: [
						 { label: "无模糊", value: "no blur" },
						 { label: "模糊", value: "blur" },
					 ],
					 defaultValue: "no blur",
				 }),
				 avatar: fields.image({
					 label: "头像",
					 publicPath: "/src/data/bio",
					 directory: "/src/data/bio",
					 validation: {
						 isRequired: true,
					 },
				 }),
				 background: fields.image({
					 label: "背景",
					 publicPath: "/src/data/bio",
					 directory: "/src/data/bio",
					 validation: {
						 isRequired: true,
					 },
				 }),
			 },
		 }),
	 },
 
	 /**
	  * * 社交链接集合
	  * 此配置由Astro内容集合使用，因此如果更新此配置，需要同时更新Astro内容集合的架构
	  */
	 collections: {
		 socials: collection({
			 label: "社交链接",
			 path: `src/data/socials/*`,
			 columns: ["order"],
			 slugField: "title",
			 schema: {
				 title: fields.slug({
					 name: {
						 label: "标题",
					 },
				 }),
				 url: fields.text({
					 label: "链接",
					 validation: {
						 isRequired: true,
					 },
				 }),
				 order: fields.number({
					 label: "排序",
					 validation: {
						 isRequired: true,
					 },
				 }),
				 icon: fields.select({
					 label: "图标",
					 options: [
						 { label: "Github", value: "github" },
						 { label: "Twitter", value: "twitter" },
						 { label: "Bluesky", value: "bluesky" },
						 { label: "Mastodon", value: "mastodon" },
						 { label: "LinkedIn", value: "linkedin" },
						 { label: "Instagram", value: "instagram" },
						 { label: "Threads", value: "threads" },
						 { label: "Facebook", value: "facebook" },
						 { label: "YouTube", value: "youtube" },
						 { label: "Twitch", value: "twitch" },
						 { label: "TikTok", value: "tiktok" },
						 { label: "Snapchat", value: "snapchat" },
						 { label: "Reddit", value: "reddit" },
						 { label: "Pinterest", value: "pinterest" },
						 { label: "Medium", value: "medium" },
						 { label: "Dev", value: "dev" },
						 { label: "Dribbble", value: "dribbble" },
						 { label: "Behance", value: "behance" },
						 { label: "Codepen", value: "codepen" },
						 { label: "Product Hunt", value: "producthunt" },
						 { label: "Discord", value: "discord" },
						 { label: "Slack", value: "slack" },
						 { label: "WhatsApp", value: "whatsapp" },
						 { label: "Telegram", value: "telegram" },
						 { label: "Email", value: "email" },
					 ],
					 defaultValue: "github",
				 }),
			 },
		 }),
 
		 /**
		  * * 其他链接集合
		  * 此配置由Astro内容集合使用，因此如果更新此配置，需要同时更新Astro内容集合的架构
		  */
		 links: collection({
			 label: "其他链接",
			 path: `src/data/links/*`,
			 columns: ["order"],
			 slugField: "title",
			 schema: {
				 title: fields.slug({
					 name: {
						 label: "标题",
					 },
				 }),
				 description: fields.text({
					 label: "描述",
					 validation: {
						 isRequired: true,
					 },
				 }),
				 url: fields.text({
					 label: "链接",
					 validation: {
						 isRequired: true,
					 },
				 }),
				 order: fields.number({
					 label: "排序",
					 validation: {
						 isRequired: true,
					 },
				 }),
			 },
		 }),
	 },
 });