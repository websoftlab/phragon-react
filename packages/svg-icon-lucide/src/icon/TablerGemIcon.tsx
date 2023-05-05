import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGemIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGemIcon = React.forwardRef<SVGSVGElement, TablerGemIconProps>(function TablerGemIcon(props, ref) {
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
			<path d="M6 3 L18 3 L22 9 L12 22 L2 9Z" />
			<path d="m12 22 4-13-3-6" />
			<path d="M12 22 8 9l3-6" />
			<path d="M2 9h20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGemIcon.displayName = "TablerGemIcon";
}
