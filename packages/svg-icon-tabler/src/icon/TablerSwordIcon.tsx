import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSwordIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSwordIcon = React.forwardRef<SVGSVGElement, TablerSwordIconProps>(function TablerSwordIcon(
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
			<path d="M20 4v5l-9 7l-4 4l-3 -3l4 -4l7 -9z" />
			<path d="M6.5 11.5l6 6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSwordIcon.displayName = "TablerSwordIcon";
}
