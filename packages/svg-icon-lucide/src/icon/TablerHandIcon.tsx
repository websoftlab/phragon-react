import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHandIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHandIcon = React.forwardRef<SVGSVGElement, TablerHandIconProps>(function TablerHandIcon(props, ref) {
	const { children, ...rest } = props;
	return (
		<SvgIcon
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
			ref={ref}
			size={24}
			icon={undefined}
			fill="none"
		>
			<path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
			<path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
			<path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
			<path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHandIcon.displayName = "TablerHandIcon";
}
