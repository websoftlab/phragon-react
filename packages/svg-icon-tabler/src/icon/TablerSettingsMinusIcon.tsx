import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSettingsMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSettingsMinusIcon = React.forwardRef<SVGSVGElement, TablerSettingsMinusIconProps>(
	function TablerSettingsMinusIcon(props, ref) {
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
				<path d="M12.488 20.933c-.863 .243 -1.902 -.174 -2.163 -1.25a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.535 .13 -.976 .507 -1.187 1.016c-.049 .118 -.084 .185 -.106 .309" />
				<path d="M16 19h6" />
				<path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSettingsMinusIcon.displayName = "TablerSettingsMinusIcon";
}
