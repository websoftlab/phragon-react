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
			<path d="M9 20h6" />
			<path d="M12 20v-8" />
			<path d="M5 12h14l-4 -8h-6z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLampIcon.displayName = "TablerLampIcon";
}
