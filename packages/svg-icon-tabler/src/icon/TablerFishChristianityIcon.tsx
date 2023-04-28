import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFishChristianityIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFishChristianityIcon = React.forwardRef<SVGSVGElement, TablerFishChristianityIconProps>(
	function TablerFishChristianityIcon(props, ref) {
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
				<path d="M22 7s-5.646 10 -12.308 10c-3.226 .025 -6.194 -1.905 -7.692 -5c1.498 -3.095 4.466 -5.025 7.692 -5c6.662 0 12.308 10 12.308 10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFishChristianityIcon.displayName = "TablerFishChristianityIcon";
}
