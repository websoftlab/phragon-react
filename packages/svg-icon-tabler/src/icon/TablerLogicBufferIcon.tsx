import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLogicBufferIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLogicBufferIcon = React.forwardRef<SVGSVGElement, TablerLogicBufferIconProps>(
	function TablerLogicBufferIcon(props, ref) {
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
				<path d="M22 12h-5" />
				<path d="M2 9h5" />
				<path d="M2 15h5" />
				<path d="M7 5l10 7l-10 7z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLogicBufferIcon.displayName = "TablerLogicBufferIcon";
}
