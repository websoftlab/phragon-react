import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerViewfinderOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerViewfinderOffIcon = React.forwardRef<SVGSVGElement, TablerViewfinderOffIconProps>(
	function TablerViewfinderOffIcon(props, ref) {
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
				<path d="M5.65 5.623a9 9 0 1 0 12.71 12.745m1.684 -2.328a9 9 0 0 0 -12.094 -12.08" />
				<path d="M12 3v4" />
				<path d="M12 21v-3" />
				<path d="M3 12h4" />
				<path d="M21 12h-3" />
				<path d="M12 12v.01" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerViewfinderOffIcon.displayName = "TablerViewfinderOffIcon";
}
