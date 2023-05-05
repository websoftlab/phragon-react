import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlug2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlug2Icon = React.forwardRef<SVGSVGElement, TablerPlug2IconProps>(function TablerPlug2Icon(
	props,
	ref
) {
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
			<path d="M9 2v6" />
			<path d="M15 2v6" />
			<path d="M12 17v5" />
			<path d="M5 8h14" />
			<path d="M6 11V8h12v3a6 6 0 1 1-12 0v0Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPlug2Icon.displayName = "TablerPlug2Icon";
}
