import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSlidersHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSlidersHorizontalIcon = React.forwardRef<SVGSVGElement, TablerSlidersHorizontalIconProps>(
	function TablerSlidersHorizontalIcon(props, ref) {
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
				<path d="M21 4 L14 4" />
				<path d="M10 4 L3 4" />
				<path d="M21 12 L12 12" />
				<path d="M8 12 L3 12" />
				<path d="M21 20 L16 20" />
				<path d="M12 20 L3 20" />
				<path d="M14 2 L14 6" />
				<path d="M8 10 L8 14" />
				<path d="M16 18 L16 22" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSlidersHorizontalIcon.displayName = "TablerSlidersHorizontalIcon";
}
