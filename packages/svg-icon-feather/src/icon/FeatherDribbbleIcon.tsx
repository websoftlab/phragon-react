import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherDribbbleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherDribbbleIcon = React.forwardRef<SVGSVGElement, FeatherDribbbleIconProps>(
	function FeatherDribbbleIcon(props, ref) {
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
				<circle cx="12" cy="12" r="10" />
				<path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherDribbbleIcon.displayName = "FeatherDribbbleIcon";
}
