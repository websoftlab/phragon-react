import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBinaryIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBinaryIcon = React.forwardRef<SVGSVGElement, TablerBinaryIconProps>(function TablerBinaryIcon(
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
			<path d="M6 20h4" />
			<path d="M14 10h4" />
			<path d="M6 14h2v6" />
			<path d="M14 4h2v6" />
			<path d="M6 4 H10 V10 H6 V4 z" />
			<path d="M14 14 H18 V20 H14 V14 z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBinaryIcon.displayName = "TablerBinaryIcon";
}
