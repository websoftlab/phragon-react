import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSeparatorVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSeparatorVerticalIcon = React.forwardRef<SVGSVGElement, TablerSeparatorVerticalIconProps>(
	function TablerSeparatorVerticalIcon(props, ref) {
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
				<path d="M12 3 L12 21" />
				<path d="M8 8 L4 12 L8 16" />
				<path d="M16 16 L20 12 L16 8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSeparatorVerticalIcon.displayName = "TablerSeparatorVerticalIcon";
}
