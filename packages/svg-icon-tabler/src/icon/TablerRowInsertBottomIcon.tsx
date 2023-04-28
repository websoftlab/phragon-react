import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRowInsertBottomIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRowInsertBottomIcon = React.forwardRef<SVGSVGElement, TablerRowInsertBottomIconProps>(
	function TablerRowInsertBottomIcon(props, ref) {
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
				<path d="M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1z" />
				<path d="M12 15l0 4" />
				<path d="M14 17l-4 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRowInsertBottomIcon.displayName = "TablerRowInsertBottomIcon";
}
