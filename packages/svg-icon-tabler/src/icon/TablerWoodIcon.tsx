import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWoodIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWoodIcon = React.forwardRef<SVGSVGElement, TablerWoodIconProps>(function TablerWoodIcon(props, ref) {
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
			<path d="M12 5.5m-6 0a6 2.5 0 1 0 12 0a6 2.5 0 1 0 -12 0" />
			<path d="M18 5.5v4.626a1.415 1.415 0 0 1 1.683 2.18l-.097 .108l-1.586 1.586v4c0 1.61 -2.54 2.925 -5.725 3l-.275 0c-3.314 0 -6 -1.343 -6 -3v-2l-1.586 -1.586a1.414 1.414 0 0 1 1.586 -2.287v-6.627" />
			<path d="M10 12.5v1.5" />
			<path d="M14 16v1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWoodIcon.displayName = "TablerWoodIcon";
}
