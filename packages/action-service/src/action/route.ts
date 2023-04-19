import type { Navigator } from "@phragon/render-driver-react/app";
import type { To } from "history";
import type { ActionService } from "@phragon-util/action-service";
import { makeReqProps, createPath } from "./util";

type MakeUrlCallback = (name: string, parameters?: any) => string;

interface BaseGoto {
	state?: any;
	scroll?: boolean;
}

export interface RouteGotoActionProps extends BaseGoto {
	to?: To;
	name?: string;
	parameters?: any;
	replace?: boolean;
}

export interface RouteGotoReqActionProps<Req extends {} = any> extends RouteGotoActionProps {
	req: Req;
	reqParameters: Record<keyof Req, string>;
}

export interface RouteBackActionProps {}
export interface RouteForwardActionProps {}
export interface RouteReloadActionProps extends BaseGoto {}
export interface RouteHomeActionProps extends Omit<RouteGotoActionProps, "to"> {}

export interface AddRouteOptions {
	navigator: Navigator;
	makeUrl: MakeUrlCallback;
	homePage?: To;
}

function gotoReq(navigator: Navigator, makeUrl: MakeUrlCallback, props: RouteGotoReqActionProps) {
	return goto(navigator, makeUrl, makeReqProps(props));
}

function goto(navigator: Navigator, makeUrl: MakeUrlCallback, props: RouteGotoActionProps) {
	let { to, name, parameters, replace, ...rest } = props;
	if (name) {
		to = makeUrl(name, parameters);
	} else if (!to) {
		to = "/";
	}
	if (typeof replace !== "boolean") {
		replace = createPath(location) === (typeof to === "string" ? to : createPath(to || { pathname: "/" }));
	}
	return replace ? navigator.replace(to, rest) : navigator.push(to, rest);
}

function back(navigator: Navigator, _props: RouteBackActionProps = {}) {
	return navigator.back();
}

function forward(navigator: Navigator, _props: RouteForwardActionProps = {}) {
	return navigator.forward();
}

function reload(navigator: Navigator, props: RouteReloadActionProps = {}) {
	return navigator.replace(
		{
			pathname: location.pathname,
			search: location.search,
			hash: location.hash,
		},
		props
	);
}

function home(navigator: Navigator, makeUrl: MakeUrlCallback, to: To = "/", props: RouteHomeActionProps) {
	return goto(navigator, makeUrl, { ...props, to });
}

export function addRouteActions(service: ActionService, options: AddRouteOptions) {
	const { navigator, makeUrl, homePage = "/" } = options;
	return service.addActions({
		"route.goto": (props: RouteGotoActionProps = {}) => goto(navigator, makeUrl, props),
		"route.goto.req": (props: RouteGotoReqActionProps) => gotoReq(navigator, makeUrl, props),
		"route.back": (props: RouteBackActionProps = {}) => back(navigator, props),
		"route.forward": (props: RouteForwardActionProps = {}) => forward(navigator, props),
		"route.reload": (props: RouteReloadActionProps = {}) => reload(navigator, props),
		"route.home": (props: RouteHomeActionProps = {}) => home(navigator, makeUrl, homePage, props),
	});
}
