import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGenderDemigirlIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGenderDemigirlIcon = React.forwardRef<SVGSVGElement, TablerGenderDemigirlIconProps>(
	function TablerGenderDemigirlIcon(props, ref) {
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
				<path d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
				<path d="M12 14v7" />
				<path d="M9 18h3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGenderDemigirlIcon.displayName = "TablerGenderDemigirlIcon";
}
