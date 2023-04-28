import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMinusVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMinusVerticalIcon = React.forwardRef<SVGSVGElement, TablerMinusVerticalIconProps>(
	function TablerMinusVerticalIcon(props, ref) {
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
				<path d="M12 5v14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMinusVerticalIcon.displayName = "TablerMinusVerticalIcon";
}
