import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLampIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLampIcon = React.forwardRef<SVGSVGElement, TablerLampIconProps>(function TablerLampIcon(props, ref) {
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
			<path d="M8 2h8l4 10H4L8 2Z" />
			<path d="M12 12v6" />
			<path d="M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLampIcon.displayName = "TablerLampIcon";
}
