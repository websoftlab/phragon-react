import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSignLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSignLeftIcon = React.forwardRef<SVGSVGElement, TablerSignLeftIconProps>(function TablerSignLeftIcon(
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
			<path d="M16 21h-4" />
			<path d="M14 21v-10" />
			<path d="M14 6v-3" />
			<path d="M18 6h-10l-2 2.5l2 2.5h10z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSignLeftIcon.displayName = "TablerSignLeftIcon";
}
