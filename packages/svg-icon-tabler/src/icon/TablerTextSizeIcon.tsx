import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTextSizeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTextSizeIcon = React.forwardRef<SVGSVGElement, TablerTextSizeIconProps>(function TablerTextSizeIcon(
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
			<path d="M3 7v-2h13v2" />
			<path d="M10 5v14" />
			<path d="M12 19h-4" />
			<path d="M15 13v-1h6v1" />
			<path d="M18 12v7" />
			<path d="M17 19h2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTextSizeIcon.displayName = "TablerTextSizeIcon";
}
