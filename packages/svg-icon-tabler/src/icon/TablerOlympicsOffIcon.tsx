import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerOlympicsOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerOlympicsOffIcon = React.forwardRef<SVGSVGElement, TablerOlympicsOffIconProps>(
	function TablerOlympicsOffIcon(props, ref) {
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
				<path d="M6 6a3 3 0 1 0 3 3" />
				<path d="M18 9m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M9 9a3 3 0 0 0 3 3m2.566 -1.445a3 3 0 0 0 -4.135 -4.113" />
				<path d="M9 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M12.878 12.88a3 3 0 0 0 4.239 4.247m.586 -3.431a3.012 3.012 0 0 0 -1.43 -1.414" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerOlympicsOffIcon.displayName = "TablerOlympicsOffIcon";
}
