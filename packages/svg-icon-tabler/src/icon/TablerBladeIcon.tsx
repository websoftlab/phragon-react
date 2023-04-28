import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBladeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBladeIcon = React.forwardRef<SVGSVGElement, TablerBladeIconProps>(function TablerBladeIcon(
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
			<path d="M17.707 3.707l2.586 2.586a1 1 0 0 1 0 1.414l-.586 .586a1 1 0 0 0 0 1.414l.586 .586a1 1 0 0 1 0 1.414l-8.586 8.586a1 1 0 0 1 -1.414 0l-.586 -.586a1 1 0 0 0 -1.414 0l-.586 .586a1 1 0 0 1 -1.414 0l-2.586 -2.586a1 1 0 0 1 0 -1.414l.586 -.586a1 1 0 0 0 0 -1.414l-.586 -.586a1 1 0 0 1 0 -1.414l8.586 -8.586a1 1 0 0 1 1.414 0l.586 .586a1 1 0 0 0 1.414 0l.586 -.586a1 1 0 0 1 1.414 0z" />
			<path d="M8 16l3.2 -3.2" />
			<path d="M12.8 11.2l3.2 -3.2" />
			<path d="M14 8l2 2" />
			<path d="M8 14l2 2" />
			<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBladeIcon.displayName = "TablerBladeIcon";
}
