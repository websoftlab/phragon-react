import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerIdBadge2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerIdBadge2Icon = React.forwardRef<SVGSVGElement, TablerIdBadge2IconProps>(function TablerIdBadge2Icon(
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
			<path d="M7 12h3v4h-3z" />
			<path d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6" />
			<path d="M10 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
			<path d="M14 16h2" />
			<path d="M14 12h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerIdBadge2Icon.displayName = "TablerIdBadge2Icon";
}
