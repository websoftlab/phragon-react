import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWorldIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWorldIcon = React.forwardRef<SVGSVGElement, TablerWorldIconProps>(function TablerWorldIcon(
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
			<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
			<path d="M3.6 9h16.8" />
			<path d="M3.6 15h16.8" />
			<path d="M11.5 3a17 17 0 0 0 0 18" />
			<path d="M12.5 3a17 17 0 0 1 0 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWorldIcon.displayName = "TablerWorldIcon";
}
