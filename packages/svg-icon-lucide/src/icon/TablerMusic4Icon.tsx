import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMusic4IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMusic4Icon = React.forwardRef<SVGSVGElement, TablerMusic4IconProps>(function TablerMusic4Icon(
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
			<path d="M9 18V5l12-2v13" />
			<path d="m9 9 12-2" />
			<path d="M9 18 A3 3 0 0 1 6 21 A3 3 0 0 1 3 18 A3 3 0 0 1 9 18" />
			<path d="M21 16 A3 3 0 0 1 18 19 A3 3 0 0 1 15 16 A3 3 0 0 1 21 16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMusic4Icon.displayName = "TablerMusic4Icon";
}
