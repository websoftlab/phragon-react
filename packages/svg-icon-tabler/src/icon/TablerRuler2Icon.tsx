import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRuler2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRuler2Icon = React.forwardRef<SVGSVGElement, TablerRuler2IconProps>(function TablerRuler2Icon(
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
			<path d="M17 3l4 4l-14 14l-4 -4z" />
			<path d="M16 7l-1.5 -1.5" />
			<path d="M13 10l-1.5 -1.5" />
			<path d="M10 13l-1.5 -1.5" />
			<path d="M7 16l-1.5 -1.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRuler2Icon.displayName = "TablerRuler2Icon";
}
