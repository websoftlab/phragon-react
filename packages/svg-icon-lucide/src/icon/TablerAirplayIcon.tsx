import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAirplayIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAirplayIcon = React.forwardRef<SVGSVGElement, TablerAirplayIconProps>(function TablerAirplayIcon(
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
			<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
			<path d="M12 15 L17 21 L7 21 L12 15Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAirplayIcon.displayName = "TablerAirplayIcon";
}
