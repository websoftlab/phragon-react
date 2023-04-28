import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBoxModelIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBoxModelIcon = React.forwardRef<SVGSVGElement, TablerBoxModelIconProps>(function TablerBoxModelIcon(
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
			<path d="M8 8h8v8h-8z" />
			<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
			<path d="M16 16l3.3 3.3" />
			<path d="M16 8l3.3 -3.3" />
			<path d="M8 8l-3.3 -3.3" />
			<path d="M8 16l-3.3 3.3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBoxModelIcon.displayName = "TablerBoxModelIcon";
}
