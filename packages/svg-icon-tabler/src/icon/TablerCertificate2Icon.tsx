import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCertificate2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCertificate2Icon = React.forwardRef<SVGSVGElement, TablerCertificate2IconProps>(
	function TablerCertificate2Icon(props, ref) {
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
				<path d="M12 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M10 7h4" />
				<path d="M10 18v4l2 -1l2 1v-4" />
				<path d="M10 19h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCertificate2Icon.displayName = "TablerCertificate2Icon";
}
