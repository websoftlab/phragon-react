import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerJewishStarIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerJewishStarIcon = React.forwardRef<SVGSVGElement, TablerJewishStarIconProps>(
	function TablerJewishStarIcon(props, ref) {
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
				<path d="M12 2l3 5h6l-3 5l3 5h-6l-3 5l-3 -5h-6l3 -5l-3 -5h6z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerJewishStarIcon.displayName = "TablerJewishStarIcon";
}
