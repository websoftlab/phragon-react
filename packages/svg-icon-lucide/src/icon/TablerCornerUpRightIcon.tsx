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
				<path d="M15 14 L20 9 L15 4" />
				<path d="M4 20v-7a4 4 0 0 1 4-4h12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCornerUpRightIcon.displayName = "TablerCornerUpRightIcon";
}
