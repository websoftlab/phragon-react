import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNoCopyrightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNoCopyrightIcon = React.forwardRef<SVGSVGElement, TablerNoCopyrightIconProps>(
	function TablerNoCopyrightIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173" />
				<path d="M6 6l1.5 1.5" />
				<path d="M16.5 16.5l1.5 1.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerNoCopyrightIcon.displayName = "TablerNoCopyrightIcon";
}
