import type { Navigator, To } from "@phragon/render-driver-react/app";
import type { DashboardService } from "../DashboardService";
import { createPath } from "@phragon/render-driver-react/app";
import { makeReqProps } from "./util";

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

function gotoReq(service: DashboardService, props: RouteGotoReqActionProps) {
	return goto(service, makeReqProps(props));
}

function goto(service: DashboardService, props: RouteGotoActionProps) {
	const navigator = service.api.services.navigator;
	if (!navigator) {
		return;
	}
	let { to, name, parameters, replace, ...rest } = props;
	if (name) {
		to = service.makeUrl(`dashboard:web.${name}`, parameters);
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

function home(service: DashboardService, to: To = "/", props: RouteHomeActionProps = {}) {
	return goto(service, { ...props, to });
}

export function addRouteActions(service: DashboardService) {
	const navigator = service.api.services.navigator;
	if (!navigator) {
		return () => {};
	}
	const homePage: string = service.api.app.state.dashboard?.path || "/";
	return service.addActions({
		"route.goto": (props: RouteGotoActionProps) => goto(service, props),
		"route.goto.req": (props: RouteGotoReqActionProps) => gotoReq(service, props),
		"route.back": (props: RouteBackActionProps = {}) => back(navigator, props),
		"route.forward": (props: RouteForwardActionProps = {}) => forward(navigator, props),
		"route.reload": (props: RouteReloadActionProps = {}) => reload(navigator, props),
		"route.home": (props: RouteHomeActionProps = {}) => home(service, homePage, props),
	});
}
