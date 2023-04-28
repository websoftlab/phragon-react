import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBoxModelOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBoxModelOffIcon = React.forwardRef<SVGSVGElement, TablerBoxModelOffIconProps>(
	function TablerBoxModelOffIcon(props, ref) {
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
				<path d="M12 8h4v4m0 4h-8v-8" />
				<path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405" />
				<path d="M16 16l3.3 3.3" />
				<path d="M16 8l3.3 -3.3" />
				<path d="M8 8l-3.3 -3.3" />
				<path d="M8 16l-3.3 3.3" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBoxModelOffIcon.displayName = "TablerBoxModelOffIcon";
}
