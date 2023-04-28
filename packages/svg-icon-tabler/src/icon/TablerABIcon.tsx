import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerABIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerABIcon = React.forwardRef<SVGSVGElement, TablerABIconProps>(function TablerABIcon(props, ref) {
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
			<path d="M3 16v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" />
			<path d="M12 6l0 12" />
			<path d="M16 16v-8h3a2 2 0 0 1 0 4h-3m3 0a2 2 0 0 1 0 4h-3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerABIcon.displayName = "TablerABIcon";
}
