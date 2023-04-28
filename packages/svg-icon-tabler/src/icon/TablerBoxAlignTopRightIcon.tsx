import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBoxAlignTopRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBoxAlignTopRightIcon = React.forwardRef<SVGSVGElement, TablerBoxAlignTopRightIconProps>(
	function TablerBoxAlignTopRightIcon(props, ref) {
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
				<path d="M19 11.01h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1z" />
				<path d="M20 15.01v-.01" />
				<path d="M20 20.01v-.01" />
				<path d="M15 20.01v-.01" />
				<path d="M9 20.01v-.01" />
				<path d="M9 4.01v-.01" />
				<path d="M4 20.01v-.01" />
				<path d="M4 15.01v-.01" />
				<path d="M4 9.01v-.01" />
				<path d="M4 4.01v-.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBoxAlignTopRightIcon.displayName = "TablerBoxAlignTopRightIcon";
}
