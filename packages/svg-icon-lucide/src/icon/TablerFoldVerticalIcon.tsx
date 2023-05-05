import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFoldVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFoldVerticalIcon = React.forwardRef<SVGSVGElement, TablerFoldVerticalIconProps>(
	function TablerFoldVerticalIcon(props, ref) {
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
				<path d="M12 22v-6" />
				<path d="M12 8V2" />
				<path d="M4 12H2" />
				<path d="M10 12H8" />
				<path d="M16 12h-2" />
				<path d="M22 12h-2" />
				<path d="m15 19-3-3-3 3" />
				<path d="m15 5-3 3-3-3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFoldVerticalIcon.displayName = "TablerFoldVerticalIcon";
}
