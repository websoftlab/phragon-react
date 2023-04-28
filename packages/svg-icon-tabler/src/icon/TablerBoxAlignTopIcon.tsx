import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBoxAlignTopIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBoxAlignTopIcon = React.forwardRef<SVGSVGElement, TablerBoxAlignTopIconProps>(
	function TablerBoxAlignTopIcon(props, ref) {
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
				<path d="M4 9.505h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z" />
				<path d="M4 14.505v-.01" />
				<path d="M4 19.505v-.01" />
				<path d="M9 19.505v-.01" />
				<path d="M15 19.505v-.01" />
				<path d="M20 19.505v-.01" />
				<path d="M20 14.505v-.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBoxAlignTopIcon.displayName = "TablerBoxAlignTopIcon";
}
