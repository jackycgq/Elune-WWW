/**
 * Generated on Sat, 23 Sep 2017 03:44:15 GMT 
 * 本文件由routes.yaml模板生成, 请不要直接修改
 */

import Home from "entries/home";
import Blog from "entries/blog";
import Channels from "entries/channels";
import Channel from "entries/channel";
import Topic from "entries/topic";
import Article from "entries/article";
import Uc from "entries/uc";
import NotFound from "entries/notFound";

const routes = [
    { path: "/", exact: true, component: Home },
    { path: "/blog", exact: true, component: Blog },
    { path: "/channels", exact: true, component: Channels },
    { path: "/channel/:id", exact: false, component: Channel },
    { path: "/topic/:id", exact: false, component: Topic },
    { path: "/article/:id", exact: false, component: Article },
    { path: "/u/:username", exact: false, component: Uc },
    { path: "", exact: false, component: NotFound }
];

export default routes;
