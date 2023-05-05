import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRotateCwIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRotateCwIcon = React.forwardRef<SVGSVGElement, TablerRotateCwIconProps>(function TablerRotateCwIcon(
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
			<path d="M21 2v6h-6" />
			<path d="M21 13a9 9 0 1 1-3-7.7L21 8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRotateCwIcon.displayName = "TablerRotateCwIcon";
}
