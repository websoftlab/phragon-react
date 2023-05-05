import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCornerUpLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCornerUpLeftIcon = React.forwardRef<SVGSVGElement, TablerCornerUpLeftIconProps>(
	function TablerCornerUpLeftIcon(props, ref) {
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
				<path d="M9 14 L4 9 L9 4" />
				<path d="M20 20v-7a4 4 0 0 0-4-4H4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCornerUpLeftIcon.displayName = "TablerCornerUpLeftIcon";
}
