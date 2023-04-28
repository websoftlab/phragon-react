import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUsbIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUsbIcon = React.forwardRef<SVGSVGElement, TablerUsbIconProps>(function TablerUsbIcon(props, ref) {
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
			<path d="M12 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M12 17v-11.5" />
			<path d="M7 10v3l5 3" />
			<path d="M12 14.5l5 -2v-2.5" />
			<path d="M16 10h2v-2h-2z" />
			<path d="M7 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M10 5.5h4l-2 -2.5z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerUsbIcon.displayName = "TablerUsbIcon";
}
