import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCornerUpRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCornerUpRightIcon = React.forwardRef<SVGSVGElement, TablerCornerUpRightIconProps>(
	function TablerCornerUpRightIcon(props, ref) {
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
				<path d="M6 18v-6a3 3 0 0 1 3 -3h10l-4 -4m0 8l4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCornerUpRightIcon.displayName = "TablerCornerUpRightIcon";
}
