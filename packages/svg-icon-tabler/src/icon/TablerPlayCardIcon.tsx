import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlayCardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlayCardIcon = React.forwardRef<SVGSVGElement, TablerPlayCardIconProps>(function TablerPlayCardIcon(
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
			<path d="M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
			<path d="M8 6h.01" />
			<path d="M16 18h.01" />
			<path d="M12 16l-3 -4l3 -4l3 4z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPlayCardIcon.displayName = "TablerPlayCardIcon";
}
