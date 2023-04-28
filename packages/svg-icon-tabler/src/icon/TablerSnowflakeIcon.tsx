import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSnowflakeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSnowflakeIcon = React.forwardRef<SVGSVGElement, TablerSnowflakeIconProps>(
	function TablerSnowflakeIcon(props, ref) {
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
				<path d="M10 4l2 1l2 -1" />
				<path d="M12 2v6.5l3 1.72" />
				<path d="M17.928 6.268l.134 2.232l1.866 1.232" />
				<path d="M20.66 7l-5.629 3.25l.01 3.458" />
				<path d="M19.928 14.268l-1.866 1.232l-.134 2.232" />
				<path d="M20.66 17l-5.629 -3.25l-2.99 1.738" />
				<path d="M14 20l-2 -1l-2 1" />
				<path d="M12 22v-6.5l-3 -1.72" />
				<path d="M6.072 17.732l-.134 -2.232l-1.866 -1.232" />
				<path d="M3.34 17l5.629 -3.25l-.01 -3.458" />
				<path d="M4.072 9.732l1.866 -1.232l.134 -2.232" />
				<path d="M3.34 7l5.629 3.25l2.99 -1.738" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSnowflakeIcon.displayName = "TablerSnowflakeIcon";
}
